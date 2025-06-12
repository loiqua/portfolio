import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeLink: string;
  demoLink: string;
}

export const ProjectCard = ({ title, description, image, tags, codeLink, demoLink }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2">{title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex justify-between w-full">
          <Link href={codeLink} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: 'outline' }))}>
            Code
          </Link>
          <Link href={demoLink} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants())}>
            Démo
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
