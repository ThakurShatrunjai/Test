import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, Loader2, Sparkles } from 'lucide-react';

export default function QueryFormSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Static-site simulation
    setTimeout(() => {
      setLoading(false);
      toast.success('Your query has been submitted successfully!');
    }, 1000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Submit Your Query
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded-md px-3 py-2"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border rounded-md px-3 py-2"
          />

          <textarea
            placeholder="Your Message"
            required
            className="w-full border rounded-md px-3 py-2 min-h-[120px]"
          />

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin w-4 h-4" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Submit
              </span>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
