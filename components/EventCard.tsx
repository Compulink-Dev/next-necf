"use client";
import { useState } from "react";
import RegisterDialog from "./RegisterDialog";
import { MdTimer } from "react-icons/md";
import { Download } from "lucide-react";

interface EventProps {
  image: string;
  title: string;
  date: string;
  link: string;
  document: string;
}

const EventCard = ({ image, title, date, link, document: docUrl }: EventProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    if (!docUrl) return;
    
    const anchor = window.document.createElement('a');
    anchor.href = docUrl;
    anchor.download = `${title.replace(/\s+/g, '-')}.${docUrl.split('.').pop()?.toLowerCase() || 'file'}`;
    anchor.click();
  };

  const handleViewPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!docUrl) return;

    try {
      const response = await fetch(docUrl, { method: 'HEAD' });
      if (response.ok) {
        window.open(docUrl, '_blank', 'noopener,noreferrer');
      } else {
        setPdfError(true);
        handleDownload(); // Automatically fallback to download
      }
    } catch (error) {
      setPdfError(true);
      handleDownload(); // Automatically fallback to download
    }
  };

  return (
    <div className="lg:flex">
      <img
        className="object-contain md:object-cover w-full h-56 rounded-lg lg:w-64"
        src={image}
        alt={title}
        width={300}
        height={300}
        loading="lazy"
      />

      <div className="flex flex-col justify-between items-center py-6 lg:mx-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          
          {docUrl && (
            <div className="mt-2 flex flex-col items-center gap-1">
         <div className="flex gap-4 items-center justify-center">
         <button
                onClick={handleViewPdf}
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                {docUrl.includes('.pdf') ? 'View PDF' : 'Open Document'}
              </button>
              
              <button
                onClick={handleDownload}
                className="text-sm text-green-600 hover:underline dark:text-green-400"
              >
               <Download size={16} />
              </button>
         </div>
              
              {pdfError && (
                <p className="text-red-500 text-xs mt-1">
                  Couldn't open in browser. The file has been downloaded instead.
                </p>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
        >
          Register
        </button>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          <div className="flex gap-2 items-center">
            <MdTimer />
            <p>{date}</p>
          </div>
        </span>
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