import styled from "styled-components";
import Background from '../../assets/609173.jpg'

export const SectionMain = styled.div`
   .container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('${Background}');
    background-repeat: no-repeat;
    height: 100vh;
    background-size: cover;
}
.container1{
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container2{
    color: white;
    width: 570px;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}
.subtitulo{
    font-size: 20px;
    font-weight: 500;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}
.paragrafo{
    font-size: 16px;
}
.container h1{
    font-size: 60px;
    font-weight: 900;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}
.video{
    margin-top: 40px;
    width: 600px;
    height:300px;
    border-radius: 12px;
}

@media (max-width: 667px){
    .container{
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('${Background}');
        background-repeat: no-repeat;
        height: 100vh;
        background-position: center;
        background-size: cover;
    }
    
    .container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
    }
    .container h1{
        font-size: 46px;
    }
    .container2{
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
    .video{
        margin-top: 20px;
        width: 350px;
        height:200px; 
        border-radius: 12px;
    }

}

`