import React from 'react';
const PlayListList = ({title,
                       playlists, 
                       userId, 
                       hasCreateAccess, 
                       hasDeleteAccess,
                       newPlayList, 
                       createPlayList, 
                       newPlayListNameChanged,
                       deletePlayListById}) => {
    console.log("Has create list access : ", hasCreateAccess);
    console.log("Render playlists : ", playlists, userId);
    return (
        <div className="row">
            <div className="card mb-3 w-100 border-0">
                <div className="card-header border-danger text-dark"
                    style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                    <i className="fa fa-circle mr-2 text-danger"></i> 
                    {title}
                </div>
                <ul className="list-group list-group-flush">                  
                    {playlists && playlists.map(list => {
                        return (
                            <li className="list-group-item" key={list.id}>
                                <div className="row">
                                    <div className="col my-auto">
                                        <a href={"/playlist/" + list.id}
                                        target="_blank">
                                            {list.name}
                                        </a>
                                    </div>
                                    <div className="col text-right my-auto"
                                         hidden={hasDeleteAccess ? false : true}
                                         onClick={() => deletePlayListById(userId, list)}>
                                        <button type="button" 
                                                className="btn btn-primary mr-auto">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>  
                        );
                    })}
                    <li className="list-group-item"
                        hidden={hasCreateAccess ? false : true}>
                        <div className="row">
                            <div className="col-sm-8">
                                <input className="form-control"
                                       value={newPlayList.name}
                                       onChange={(event) => newPlayListNameChanged(event.target.value)}/>
                            </div>
                            <div className="col-sm-4 text-right">
                                <button type="button" 
                                        className="btn btn-primary ml-auto"
                                        onClick={(event) => createPlayList(userId, newPlayList)}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>            
    );
}

export default PlayListList;
