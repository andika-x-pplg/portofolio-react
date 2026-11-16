import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { LuFolderGit2 } from 'react-icons/lu';
import { useTilt } from '../../hooks/useTilt';

const ProjectCard = ({ project }) => {
  const { ref, onMouseMove, onMouseLeave, style } = useTilt({ max: 5, scale: 1.015 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      data-cursor="hover"
      className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-left overflow-hidden hover:border-cyan-400/50 transition-colors duration-300 flex flex-col justify-between"
    >
      <div data-tilt-glare className="pointer-events-none absolute inset-0 z-10 rounded-3xl" />

      <div className="flex flex-col flex-1">
        {/* Gambar + Hover Overlay */}
        <a
          href={project.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-text="View Code"
          className="group relative block w-full overflow-hidden bg-slate-900/60"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-48 md:h-64 lg:h-80 w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm"
            />
          ) : (
            <div className="h-48 md:h-64 lg:h-80 w-full flex flex-col items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-800/40 to-slate-900/90 text-slate-500 transition-all duration-500 group-hover:scale-105">
              <LuFolderGit2 className="text-5xl text-cyan-400/60 mb-2 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300" />
              <span className="text-sm font-medium text-slate-400">Preview Image Placeholder</span>
              <span className="text-xs text-slate-500 mt-1">Siap diisi gambar project baru</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <div className="flex flex-col items-center gap-3 text-white">
              <FaGithub className="text-3xl md:text-4xl lg:text-5xl" />
              <span className="text-base md:text-lg lg:text-xl font-semibold px-4 text-center">
                {project.title}
              </span>
            </div>
          </div>
        </a>

        {/* Isi Card */}
        <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-slate-400">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
            {project.tags && project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

