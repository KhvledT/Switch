"use client";
import { useState } from "react";
import { Globe, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useI18n } from "./i18n-context";


export default function domainSection() {
    const [domain, setDomain] = useState("");
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { t } = useI18n();


    const handleSearch = async () => {
    if (!domain) return;

    setLoading(true);
    setError("");
    setResult(null);
    if (!domain.includes('.')) {
        setError("Invalid domain format please include a TLD (e.g., .com)");
        setLoading(false);
        return;
    }

    try {
        const res = await fetch(`/api/domain-check?domain=${domain}`);
        
        const data = await res.json();

        if (!res.ok) {
        throw new Error(data.error || "Request failed");
        }

        setResult(data);
    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

  return (
      <section className="border-y bg-muted/30 py-24">
        {/* Domain Search Section */}
        <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-2xl rounded-none border bg-background p-8 shadow-2xl md:p-12">
            <h2 className="mb-8 text-3xl font-black tracking-tighter uppercase">
                {t("domain_search")}
            </h2>

            <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-grow">
                <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="yourname.com"
                    className="h-14 pl-12 text-lg rounded-none"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                />
                </div>

                <Button
                size="lg"
                className="h-14 px-8 font-bold rounded-none"
                onClick={handleSearch}
                disabled={loading}
                >
                <Search className="mr-2 h-5 w-5" />
                {loading ? "Checking..." : t("search")}
                </Button>
            </div>

            {/* Errors */}
            {error && (
                <p className="mt-4 text-sm text-red-500">{error}</p>
            )}

            {/* Results */}
            {result && (
                <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
                {/* Available */}
                {result.available && (
                    <div className="border p-4">
                    <p className="text-xs font-bold uppercase text-green-600">
                        Available
                    </p>
                    <p className="font-mono text-sm">{result.domain}</p>
                    </div>
                )}

                {/* Taken */}
                {!result.available && (
                    <div className="border p-4 opacity-60">
                    <p className="text-xs font-bold uppercase text-red-500">
                        Taken
                    </p>
                    <p className="font-mono text-sm line-through">
                        {result.domain}
                    </p>
                    </div>
                )}
                </div>
            )}
            </div>
        </div>
        </section>

  )
}
