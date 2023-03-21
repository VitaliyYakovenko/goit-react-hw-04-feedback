import PropTypes from 'prop-types';
import css from "./Section.module.css"

export default function Section({title, children}) {
    return (
        <>
        <h1 className={css.feedback__title}>{title}</h1>
        {children}
        </>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
}
