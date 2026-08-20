import { useEffect, useRef } from 'react';

const VERTEX_SRC = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

// Cheap animated "aurora" gradient made of a few soft blobs.
// Kept intentionally simple (no noise loops) so it stays light on the GPU.
const FRAGMENT_SRC = `
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;

vec3 blob(vec2 uv, vec2 center, vec3 color, float radius) {
  float d = length(uv - center);
  float glow = smoothstep(radius, 0.0, d);
  return color * glow;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  uv.x *= uResolution.x / uResolution.y;
  vec2 mouse = uMouse;
  mouse.x *= uResolution.x / uResolution.y;

  vec3 col = vec3(0.03, 0.05, 0.07);

  vec2 c1 = vec2(0.25 + sin(uTime * 0.15) * 0.12, 0.35 + cos(uTime * 0.12) * 0.10);
  vec2 c2 = vec2(1.05 + cos(uTime * 0.10) * 0.14, 0.75 + sin(uTime * 0.17) * 0.12);
  vec2 c3 = mix(vec2(0.65, 0.15), mouse, 0.15) + vec2(sin(uTime * 0.08) * 0.05, cos(uTime * 0.09) * 0.05);

  col += blob(uv, c1, vec3(0.16, 0.83, 0.75), 0.55);   // teal
  col += blob(uv, c2, vec3(0.96, 0.75, 0.18), 0.5);    // amber
  col += blob(uv, c3, vec3(0.30, 0.45, 0.60), 0.4);    // soft steel accent

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/**
 * Full-viewport animated WebGL gradient backdrop. Renders at a reduced
 * internal resolution and is scaled up with CSS for performance, runs at
 * a capped framerate, and pauses when the tab is hidden or the user
 * prefers reduced motion.
 */
const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uMouse = gl.getUniformLocation(program, 'uMouse');

    const mouse = { x: 0.5, y: 0.5 };
    const onMove = (e) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const SCALE = 0.5; // render at half resolution, upscaled via CSS
    const resize = () => {
      canvas.width = Math.max(1, Math.floor(window.innerWidth * SCALE));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let visible = !document.hidden;
    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    let rafId;
    let start = performance.now();
    let lastFrame = 0;
    const FRAME_INTERVAL = 1000 / 30; // cap at ~30fps

    const render = (now) => {
      rafId = requestAnimationFrame(render);
      if (!visible) return;
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;

      const t = prefersReduced ? 0 : (now - start) / 1000;
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-40 mix-blend-screen"
    />
  );
};

export default WebGLBackground;
