import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@repo/ui/components/ui/alert";
import { Button } from "@repo/ui/components/ui/button";
import { ThemeToggle } from "@repo/ui/components/ui/theme-toggle";
import { Terminal } from "lucide-react";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="relative flex flex-col items-center justify-center gap-4 p-4 w-fit h-fit">
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-full bg-primary blur-3xl" />
        <h1 className="z-10">Turbo Repo Starter</h1>
        <code>With Tailwind CSS and ShadcnUi Components</code>
        <Button className="z-10">
          <Terminal />
          Start Building
        </Button>
      </div>
    </div>
  );
}
