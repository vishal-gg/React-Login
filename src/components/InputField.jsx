import { Children } from "react";
import { motion } from "framer-motion"

export const InputField = ({ children, label }) => {
  const id = getChildId(children)

  return (
    <motion.div layout className="grid gap-2">
      <label htmlFor={id} className="shrink-0 font-semibold capitalize">
        {label}
      </label>
      {children}
    </motion.div>
  )
}

// Get id prop from a child element
export const getChildId = (children) => {
  const child = Children.only(children)

  if ("id" in child?.props) {
    return child.props.id;
  }
}
