import Profile from './components/Profile'
import './components/Profile/profile.css'

export default function App() {
    return (
                    <div style={{
                        
                        borderRadius: '5px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        
            <Profile 
                avatar={""}
                name={"Gabriel Marinho"}
                bio={"Sou estudante de Desenvolvimeno de Sistemas."}
                email={"gabrielmarinho1605@gmail.com"}
                phone={"+55(85)994291632"}
                githubUrl={"https://github.com/gMarinhum085"}
                instagramUrl={"https://www.instagram.com/gabriel.m7__"}
            />
        </div>
    );
}