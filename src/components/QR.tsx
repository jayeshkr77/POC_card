import QRCode from "react-qr-code";

function QR() {
    return (
        <> 
            <div id="qrcode" style={{width:'200px',height:'200px', marginTop:'15px', border:'1px solid blue'}}>
            <QRCode value="hey" bgColor="#F2EBE9" fgColor="#7C3E66" level="H" size={512} />
            </div>
        </>
    );
}

export default QR;