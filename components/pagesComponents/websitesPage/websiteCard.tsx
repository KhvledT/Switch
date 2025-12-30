"use client";
import { Button } from "@/components/ui/button";
import { Monitor, Phone, Tablet } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"
interface WebsiteCardProps {
  project: {
    title: string;
    desc: string;
    url: string;
    image: string;
  };
}
export default function WebsiteCard({ project }: WebsiteCardProps) {
  const Router = useRouter()

    
  const navigateToPreview = (url: string) => {
    Router.push(`/webiframe?url=${encodeURIComponent(url)}`)
  }
  return (
    <div
      onClick={() => navigateToPreview(project.url)}
      className="group cursor-pointer space-y-4"
    >
      {/* Preview */}
      <div className="aspect-video relative overflow-hidden border bg-muted transition-colors group-hover:border-foreground">
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={75}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        {/* Devices */}
        <div className="absolute top-4 right-4 flex gap-2">
          {[Monitor, Tablet, Phone].map((Icon, idx) => (
            <div key={idx} className="bg-background border p-1 rounded-sm">
              <Icon className="h-3 w-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black tracking-tighter uppercase">
            {project.title}
          </h3>
          <p className="text-muted-foreground">{project.desc}</p>
        </div>

        <Button
          variant="outline"
          className="font-bold bg-transparent shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            navigateToPreview(project.url);
          }}
        >
          Build Similar
        </Button>
      </div>
    </div>
  );
}
