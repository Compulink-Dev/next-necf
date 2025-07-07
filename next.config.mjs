/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: "60mb",
    },
  },
};

export default nextConfig;
