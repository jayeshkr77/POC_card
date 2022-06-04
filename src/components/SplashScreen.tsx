import translations from '../config/default_en_text.json';

function SplashScreen() {
    return (
        <div className="splash-screen">
            <div>
                <div>{translations.RESTURANT_NAME}</div>
                <div className='loader'></div>
            </div>
        </div>
    );
}
export default SplashScreen;