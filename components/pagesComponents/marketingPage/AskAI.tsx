'use client'
import { Button } from "@/components/ui/button";
import { Bot, Megaphone, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

export default function AskAI() {

  const [query, setQuery] = useState("");

  
  const quickStarts = [
    "I want more Instagram customers",
    "I want to sell more online",
    "I need automated ads",
    "I want a full marketing strategy",
  ];

  return (
    <>
      {/* ================= Direction Selector ================= */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Getting Started
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Choose your direction
            </h2>
            <p className="mt-4 text-muted-foreground">
              This helps us understand your goal before creating a personalized
              strategy.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Get more leads", icon: Users },
              { title: "Increase sales", icon: TrendingUp },
              { title: "Build brand awareness", icon: Megaphone },
              { title: "Automate marketing", icon: Bot },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  onClick={() => setQuery(item.title)}
                  className="group border p-8 text-left transition-all hover:bg-foreground hover:text-background"
                >
                  <Icon className="h-10 w-10 mb-6 opacity-60 group-hover:opacity-100" />
                  <h3 className="text-xl font-black tracking-tighter uppercase">
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= AI Assistant ================= */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border bg-background p-10">
            {/* Header */}
            <div className="mb-10">
              <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                AI Assistant
              </p>
              <h2 className="text-4xl font-black tracking-tighter uppercase">
                Describe your objective
              </h2>
            </div>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. I own a café and want more Instagram customers"
                className="flex-1 border bg-background px-5 py-4 text-lg outline-none focus:border-foreground"
              />

              <Button
                size="lg"
                className="h-14 px-8 font-black uppercase tracking-widest"
                disabled={!query.trim()}
              >
                Ask AI
              </Button>
            </div>

            {/* Quick Starts */}
            <div className="mb-12">
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
                Quick starts
              </p>
              <div className="flex flex-wrap gap-3">
                {quickStarts.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="border px-4 py-2 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t my-10" />

            {/* AI Recommendation */}
            <div className="text-center">
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">
                AI Recommendation
              </h3>

              <p className="text-muted-foreground max-w-md mx-auto">
                Your personalized marketing recommendation will appear here once
                we analyze your objective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
