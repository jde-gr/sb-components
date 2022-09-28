import './myLabel.css';

export interface MyLabelProps {
  /**
   * Este es el mensaje que se va a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Si es true todas las palabras salen con letra capital
   */
  allCaps?: boolean;
  /**
   * Colores básicos del botón
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
