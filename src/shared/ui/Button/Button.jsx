import styles from './Button.module.css'

const Button = ({ 
  children, 
  variant = 'primary',   
  size = 'medium',       
  href, 
  className = '', 
  ...rest                
}) => {

const classes = [
  styles.button,
  styles[variant],
  styles[size],
  className,
].filter(Boolean).join(' ')

if (href) {
  return (
    <a href={href} className={classes} {...rest}>{children}</a>
  )
}

  return (
    <button 
    className={classes} {...rest}
    
    >{children}</button>
  )
}

export default Button