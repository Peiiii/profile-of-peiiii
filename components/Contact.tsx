import React from 'react';
import Button from './Button';
import { Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-surface border border-white/10 p-1">
          {/* Terminal Header */}
          <div className="bg-surfaceHighlight p-2 flex gap-2 items-center border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 text-xs text-dim font-mono flex items-center gap-2">
                <Terminal size={10} />
                user@peiiii-dev: ~/contact
            </div>
          </div>

          <div className="p-8 md:p-12 bg-black/50">
            <h2 className="text-2xl font-bold text-white mb-2 uppercase">Initiate Transmission</h2>
            <p className="text-dim text-sm font-mono mb-8">Establish a secure connection for project inquiries.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-xs text-primary font-mono uppercase">root@sender:~$ Enter Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors font-mono" placeholder="_" />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs text-primary font-mono uppercase">root@sender:~$ Enter Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors font-mono" placeholder="_" />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs text-primary font-mono uppercase">root@sender:~$ Enter Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors font-mono resize-none" placeholder="_"></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">
                    EXECUTE_SEND.exe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
