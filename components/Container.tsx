import * as stylex from "@stylexjs/stylex"

const containerStyle = stylex.create({
  root: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "0 20px",
  },
})

export default function Container({ children }: { children: React.ReactNode }) {
  return <div {...stylex.props(containerStyle.root)}>{children}</div>
}
