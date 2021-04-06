import React from 'react'
import avatar from "../../assets/img/author-main1.jpg";

function Comment() {

    const cmnt = (name, cmntTime,content) => {
        return (
    
            <li className="comment-item">
            <div className="post__author author vcard inline-items">
                <img src={avatar} alt="author" />
    
                <div className="author-date">
                    <a className="h6 post__author-name fn" href="#">{name}</a>
                    <div className="post__date">
                        <time className="published" datetime="2017-03-24T18:18">
                            {cmntTime}
                        </time>
                    </div>
                </div>
    
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkhref="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
    
            </div>
    
        <p>{content}</p>
    
            
        </li>
    
        );
      };








    return (
        <div>
            <ul className="comments-list">
					
            {cmnt("Amen Allah Ben Ayada", "4 minutes","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")}
            {cmnt("Amen Allah Ben Ayada", "4 minutes","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")}
            
				</ul>
        </div>
    )
}

export default Comment
