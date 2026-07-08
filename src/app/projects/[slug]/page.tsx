import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

// This function tells Next.js which dynamic pages to generate at build time for Static Export
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}

