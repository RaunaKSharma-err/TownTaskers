'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTASection } from '@/components/CTASection';
import { projects, projectCategories, type ProjectData } from '@/lib/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="A selection of cleaning projects we've completed across residential, office, and commercial spaces."
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/our-work' },
          { name: 'Projects', path: '/our-work/projects' },
        ]}
      />

      <section className="section-py">
        <div className="container-mx container-px">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-white text-muted-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group overflow-hidden rounded-2xl border border-border bg-white text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      View Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-secondary/20 p-12 text-center">
              <p className="text-sm text-muted-foreground">
                No projects found in this category yet. Check back soon or explore our other work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
          <div
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-foreground shadow-soft hover:bg-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <Image
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {selectedProject.category}
              </span>
              <h2 className="mt-1.5 font-heading text-xl font-bold text-foreground">
                {selectedProject.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {selectedProject.description}
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Services Performed
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Want to Be Our Next Success Story?"
        description="Book a cleaning service and let us deliver the same quality results for your space."
        primaryLabel="Book on WhatsApp"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
