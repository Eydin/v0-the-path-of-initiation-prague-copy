"use client"

import ReactMarkdown from "react-markdown"

// Renders a blog post's markdown body with the site's editorial styling —
// serif headings, gold links, generous leading. Mirrors the markdown
// component-override pattern already used in chat-widget.tsx.
export function BlogArticleBody({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2
              className="mt-4 font-serif text-2xl tracking-wide text-primary md:text-3xl"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="mt-2 font-serif text-xl tracking-wide text-foreground" {...props} />
          ),
          p: ({ node, ...props }) => <p className="leading-relaxed" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />,
          em: ({ node, ...props }) => <em className="italic text-foreground" {...props} />,
          a: ({ node, ...props }) => (
            <a
              className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
              target={props.href?.startsWith("/") ? undefined : "_blank"}
              rel={props.href?.startsWith("/") ? undefined : "noopener noreferrer"}
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc space-y-2 pl-6 marker:text-primary" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal space-y-2 pl-6 marker:text-primary" {...props} />
          ),
          li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-2 border-primary/50 pl-6 font-serif text-xl italic text-foreground"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
