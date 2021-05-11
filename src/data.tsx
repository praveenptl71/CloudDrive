import { IDirectory, IDrawerMenu, IFile } from "./interface";

export const DirectoryItems: IDirectory[] = [
    { id: 1, title: 'Mobile Apps', color: '#567DF4', createAt: 'December 20.2020' },
    { id: 2, title: 'SVG Icons', color: '#FFB110', createAt: 'December 14.2020' },
    { id: 3, title: 'Prototypes', color: '#F45656', createAt: 'Novemaber 22.2020' },
    { id: 4, title: 'Avatars', color: '#34DEDE', createAt: 'Novemaber 10.2020' },
    { id: 5, title: 'Design', color: '#567DF4', createAt: 'Novemaber 02.2020' },
    { id: 6, title: 'Portfolio', color: '#FFB110', createAt: 'October 22.2020' },
    { id: 7, title: 'References', color: '#F45656', createAt: 'October 12.2020' },
    { id: 8, title: 'Clients', color: '#34DEDE', createAt: 'September 28.2020' },
    { id: 9, title: 'Pictures', color: '#567DF4', createAt: 'September 15.2020' },
    { id: 10, title: 'Videos', color: '#FFB110', createAt: 'August 31.2020' }
]

export const MenuItem : IDrawerMenu[] = [
    { id:1, title:'Home', icon:'home-outline', route:'Home'},
    { id:2, title:'Profile', icon:'account-outline', route:'Profile'},
    { id:3, title:'Storage', icon:'database', route:'Storage'},
    { id:4, title:'Shared', icon:'account-multiple-outline', route:'Shared'},
    { id:5, title:'Stats', icon:'chart-timeline-variant', route:'Stats'},
    { id:6, title:'Setting', icon:'cog-outline', route:'Setting'},
    { id:7, title:'Help', icon:'help-circle-outline', route:'Help'}
]

export const FileItems: IFile[] = [
    { id: 4, title: 'React Session.pptx', createAt: 'Novemaber 10.2020' },
    { id: 1, title: 'Projects.docx', createAt: 'December 20.2020' },
    { id: 2, title: 'Daily Task list.xlsx', createAt: 'December 14.2020' },
    { id: 3, title: 'Transport.pdf', createAt: 'Novemaber 22.2020' },
    { id: 5, title: 'Beginner tutorial.mp4', createAt: 'Novemaber 02.2020' },
    { id: 6, title: 'Information.txt', createAt: 'October 22.2020' },
    { id: 7, title: 'Voice-note.mp3', createAt: 'October 12.2020' }
]