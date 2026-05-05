import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImagePlus, Package } from 'lucide-react'

export default function ListingBuilderPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 animate-in fade-in duration-500">
      <div className="mx-auto w-full max-w-[480px] space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
            Design an <span className="text-primary">Amazon</span> Listing
          </h1>
          <p className="text-muted-foreground text-base">Get 7 editable visuals in 2 minutes</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            {/* Input with Country Select */}
            <div className="flex items-center rounded-md border bg-background shadow-xs transition-colors focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 overflow-hidden">
              <div className="pl-3.5 py-3 text-muted-foreground shrink-0">
                <ImagePlus className="h-[22px] w-[22px] opacity-70" strokeWidth={1.5} />
              </div>
              <Input 
                className="border-0 shadow-none focus-visible:ring-0 px-3 bg-transparent h-12 text-foreground placeholder:text-muted-foreground w-full" 
                placeholder="Enter ASIN (e.g., B08N5WRWNW)" 
              />
              <div className="h-10 border-l pr-1 pl-1 flex items-center shrink-0">
                 <Select defaultValue="ie">
                    <SelectTrigger className="border-0 shadow-none focus:ring-0 w-[68px] gap-0.5 hover:bg-accent/50 h-10 font-medium">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ie" className="text-foreground text-center">🇮🇪</SelectItem>
                      <SelectItem value="us" className="text-foreground text-center">🇺🇸</SelectItem>
                      <SelectItem value="uk" className="text-foreground text-center">🇬🇧</SelectItem>
                      <SelectItem value="in" className="text-foreground text-center">🇮🇳</SelectItem>
                    </SelectContent>
                 </Select>
              </div>
            </div>

            {/* OR Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/80" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-4 text-muted-foreground/80 font-medium lowercase">
                  or
                </span>
              </div>
            </div>

            {/* Select Products Button */}
            <Button variant="outline" className="w-full h-11 text-[15px] font-semibold tracking-wide border-input border-opacity-70 shadow-none hover:bg-accent hover:text-accent-foreground text-secondary-foreground transition-all">
              <Package className="mr-2 h-5 w-5 opacity-80" />
              Select from your products
            </Button>
            
            {/* Generate Button */}
            <Button className="w-full h-11 text-[15px] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-none transition-colors rounded-md mt-6">
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
