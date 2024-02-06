import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const myFont = localFont({
    src: '../fonts/Robotronics.woff',
    display: 'swap',
    variable: '--font-robotronics',
    style: 'normal',
    weight: 'normal'
})
 
const Header = () => {
    return (
        <h1 className={`${myFont.className} f1`}>My Robofriends</h1>
    )
}

export default Header;