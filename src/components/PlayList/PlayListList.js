import React from 'react';
const PlayListList = ({playlists, 
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
        <div class="row">
            <div class="card mb-3 w-100">
                <div class="card-header">
                    PlayLists
                </div>
                <ul class="list-group list-group-flush">                  
                    {playlists && playlists.map(list => {
                        return (
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col">
                                        <a href={"/playlist/" + list.id}
                                        target="_blank">
                                            {list.name}
                                        </a>
                                    </div>
                                    <div class="col text-right"
                                         hidden={hasDeleteAccess ? false : true}
                                         onClick={() => deletePlayListById(userId, list)}>
                                        <button type="button" 
                                                class="btn btn-primary mr-auto">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>  
                        );
                    })}
                    <li class="list-group-item"
                        hidden={hasCreateAccess ? false : true}>
                        <div class="row">
                            <div class="col-sm-8">
                                <input class="form-control"
                                       value={newPlayList.name}
                                       onChange={(event) => newPlayListNameChanged(event.target.value)}/>
                            </div>
                            <div class="col-sm-4 text-right">
                                <button type="button" 
                                        class="btn btn-primary ml-auto"
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
