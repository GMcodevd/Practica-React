import React from 'react';
import Feed from '../components/FeedTemp';
function PageFeeds(props) {
    return (
        <div>
            <Feed img="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg"  
            title="Batman se jubila" 
            color = "red"
            detail= "El superhéroe se retira, dejará de perseguir a los villanos debido a su avanzada edad..."></Feed>
            
            <Feed img="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Flego-batman%2FEGS_WB_LEGO_Batman_G1_1920x1080_19_0911-1920x1080-e166b698acbbbcdae1ff306198684d143828467c.jpg"  
            title="Batman se jubiló" 
            color = "blue"
            detail= "El superhéroe se retira, dejará de perseguir a los villanos debido a su avanzada edad y confirmó su anuncio..."></Feed>
        </div>
    );
}

export default PageFeeds;