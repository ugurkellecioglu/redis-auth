/** @type {import('next').NextConfig} */
import stylexPlugin from "@stylexjs/nextjs-plugin"
import path from "path"

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
}

export default stylexPlugin({
  rootDir: path.join(process.cwd(), "src"),
  useCSSLayers: true,
})(nextConfig)
