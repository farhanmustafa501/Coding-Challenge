import classes from './Footer.module.scss';
const Footer = (): JSX.Element => {
    return (
        <>
            <div className={classes.main}>
                <label className={classes.flex}>I agree for the copyrights @Nodlays</label>
            </div>
        </>
    )
}
export default Footer;