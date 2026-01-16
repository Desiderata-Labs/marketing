import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Moldable",
    url: "https://moldable.sh",
    description: "Personal software. Built for change.",
  },
  {
    name: "Shippy",
    url: "https://shippy.sh",
    description: "Ship work. Earn royalties.",
  },
  {
    name: "Innerview",
    url: "https://innerview.co",
    description: "Easy insights. Easy decisions. Easy progress.",
  },
  {
    name: "GrowPilot",
    url: "https://growpilot.bot",
    description: "Writes like humans, grows on autopilot.",
  },
  {
    name: "Stackwise",
    url: "https://stackwise.me",
    description: "Optimize your health stack.",
  },
  {
    name: "Ecole Nola",
    url: "https://ecolenola.com",
    description: "Every child has super powers.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Background grid pattern */}
      <div className="bg-grid-pattern-fade pointer-events-none fixed inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-16 md:py-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <h1
            className="animate-fade-in-blur text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0ms" }}
          >
            <span>desiderata</span>
          </h1>

          {/* Dictionary Definition */}
          <div
            className="animate-fade-in-blur mt-3 flex flex-col items-center gap-0.5 text-muted-foreground"
            style={{ animationDelay: "50ms" }}
          >
            <p className="font-serif text-sm italic tracking-wide">
              /dɪˌzɪdəˈrɑːtə/
            </p>
            <p className="text-xs">
              <span className="mr-1.5 font-medium text-muted-foreground/50">
                noun, plural
              </span>
              <span className="text-muted-foreground/90">
                things that are wanted or needed
              </span>
            </p>
          </div>

          {/* Contact Button */}
          <div
            className="animate-fade-in-blur mt-8"
            style={{ animationDelay: "200ms" }}
          >
            <Button
              size="lg"
              className="h-12 gap-2 rounded-xl px-6 text-base"
              asChild
            >
              <a href="mailto:hello@desiderata.dev">
                <Mail className="size-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Projects Section */}
        <div
          className="animate-fade-in-blur mt-20 flex-1"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Products
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product, index) => (
              <Link
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:bg-card/80"
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                {/* Gradient border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div
                    className="absolute inset-0"
                    style={{
                      padding: "1px",
                      background:
                        "linear-gradient(to bottom right, rgba(100, 130, 255, 0.3), transparent 50%)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "xor",
                      borderRadius: "0.75rem",
                    }}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer
          className="animate-fade-in-blur mt-20 text-center text-sm text-muted-foreground"
          style={{ animationDelay: "700ms" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Desiderata. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
