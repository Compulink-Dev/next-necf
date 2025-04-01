"use client";
import { useState, useEffect } from "react";
import RegisterDialog from "./RegisterDialog";
import { MdTimer } from "react-icons/md";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventProps {
  id: string;
  image: string;
  title: string;
  date: string;
  link?: string;
  document?: string;
}

const EventCard = ({ id, image, title, date, link, document: docUrl }: EventProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownload = async () => {
    if (!docUrl) return;
    
    setIsLoading(true);
    setError(null);

    try {
      // Create a temporary anchor tag to trigger download
      const anchor = document.createElement('a');
      anchor.href = docUrl;
      anchor.download = `${title.replace(/\s+/g, '-')}${docUrl.includes('.pdf') ? '.pdf' : 
                       docUrl.includes('.pptx') ? '.pptx' : 
                       docUrl.includes('.doc') ? '.doc' : '.file'}`;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch (err) {
      setError('Failed to download file');
      console.error('Download error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!docUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      // For PDFs, try to open in new tab
      if (docUrl.includes('.pdf')) {
        window.open(docUrl, '_blank', 'noopener,noreferrer');
      } else {
        // For other file types, trigger download
        await handleDownload();
      }
    } catch (err) {
      setError('Failed to open file');
      console.error('View error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:flex gap-6 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={image}
        alt={title}
        width={300}
        height={300}
        loading="lazy"
      />

      <div className="flex flex-col justify-between py-4 lg:py-0 w-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          
          {docUrl && (
            <div className="mt-3 flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={handleViewPdf}
                  disabled={isLoading}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {docUrl.includes('.pdf') ? 'Resolutions' : 'Open File'}
                </Button>
                
                {/* <Button 
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  disabled={isLoading}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button> */}
              </div>
              
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            Register
          </Button>

          <span className="text-sm text-gray-500 dark:text-gray-300 flex items-center">
            <MdTimer className="mr-1" />
            {formattedDate}
          </span>
        </div>
      </div>

      <RegisterDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        eventTitle={title}
      />
    </div>
  );
};

export default EventCard;