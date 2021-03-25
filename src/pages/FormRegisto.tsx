import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

interface IDataFormProspecto {
  nombreProspecto: string;
  entradaProspecto: string;
  nota: string;
  numeroTelefono: number;
  en: string;
  interes: string;
  ultimoAtendido: string;
  estatusAtendido: string;
}

const FormRegisto = () => {
  const params = useParams<{ inte: string }>();

  const [formData, setFormData] = useState<IDataFormProspecto>({
    nombreProspecto: "",
    entradaProspecto: "web",
    nota: "",
    numeroTelefono: 0,
    en: "base",
    interes: params.inte,
    ultimoAtendido: "",
    estatusAtendido: "",
  });

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await axios.post("https://cosbiome.online/prospectoscosbiomes", formData);

      handleGetInfo();

      e.currentTarget.reset();
    } catch (error) {}
  };

  const handleGetInfo = () => {
    const url = `${window.location.origin}/APARATOLOGÍA ESTÉTICA.pdf`;
    axios({
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
      responseType: "blob", // importante
      onDownloadProgress: (progressEvent) => {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "pixabay.pdf");
      document.body.appendChild(link);
      link.click();
    });
    console.log(url);
  };

  return (
    <>
      <div style={{ height: "90vh" }} className="container">
        <h1 className="text-center">
          REGISTRATE PARA OBTENER ATENCION PERSONALIZADA EN TU COMPRA
        </h1>

        <div className="row mt-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, nombreProspecto: e.target.value })
                }
                className="form-control"
                required
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Numero de telefono
              </label>
              <input
                type="tel"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    numeroTelefono: parseInt(e.target.value),
                  })
                }
                pattern="[0-9]{10}"
                required
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              enviar
            </button>
          </form>
        </div>
      </div>
      <div style={{ height: "10vh" }} className="container mb-3 mt-5"></div>
      <div className="container mb-3 mt-5">
        <button onClick={() => handleGetInfo()} className="btn">
          omitir
        </button>
      </div>
    </>
  );
};

export default FormRegisto;
