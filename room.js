import assets from 'https://xaidee.neocities.org/assets/'

function XaideesRoom({}) {
    const background = assets + "isometric.png"
    
    return (
        <div className="room">
            <img src={background}/>
        </div>
    );
}