const user = {
    avatarUrl: '',
    name: '',
    userName: '',
    bio: '',
    seguidores: '',
    seguindo:'',
    repositories: [],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.userName = gitHubUser.login
        this.bio = gitHubUser.bio
        this.seguidores = gitHubUser.followers
        this.seguindo = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    }
}

export { user }