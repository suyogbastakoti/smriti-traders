function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className="font-bold bg-gray-900 text-white text-center py-6">
            &copy;  {currentYear} Smriti Traders. Authorized Berger Paints Dealer.
        </footer>
    );
}

export default Footer;