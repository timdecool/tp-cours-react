import {Link} from "react-router-dom";

const HomePage = () => {
  return (
      <>
        <div className="hero bg-base-200 h-full">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Bienvenue !</h1>
              <p className="py-6">
                Réservez votre séjour de Noël en toute simplicité. Pour les petits et grands enfants !
              </p>
              <Link to="/reservation" className="btn btn-primary">Réserver dès maintenant</Link>
            </div>
          </div>
        </div>
      </>
  )
}
export default HomePage;