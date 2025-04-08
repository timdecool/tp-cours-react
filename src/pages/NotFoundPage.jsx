import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
      <>
        <div className="hero dark:bg-base-200 light:bg-base-900 h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">404</h1>
              <p className="py-6">
                Oups ! La page demandée est introuvable.
              </p>
              <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
            </div>
          </div>
        </div>
      </>
  )
}

export default NotFoundPage;