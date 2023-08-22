export interface Technology {
  title: string
}

export interface Project {
  id: number
  img: string
  logo: string
  logoColor: string
  altImg: string
  title: string
  subtitle: string
  closedIn: string
  listTechnology: Technology[]
}
