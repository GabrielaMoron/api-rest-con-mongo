import { ArtistasService } from "../services/ArtistasService.js";

const ArtistasController = {
    getAll: async (req, res) => {
        //hara la consulta mientras la promesa se resuelve(async await)
        //se consume la bd a travez del modelo
        const allArtistas = await ArtistasService.getAll();
        return res.status(200).json({
            status: true,
            total: allArtistas.length,
            data: allArtistas
        });
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        const product = await ArtistasService.getOne(id);
        return res.status(200).json({
            status: true,
            data: product,
        })
    },
    store: async (req, res) => {
        if (!req.body.nombreArtista|| !req.body.apellidoArtista) {
            return res.status(400).json({
                status: 400,
                isStored: false,
                message: "El nombre y el apellido del artista son requeridos"
            })
        }
        const newProduct = { ...req.body };
        const Artistastored = await ArtistasService.store(newProduct);
        return res.status(200).json({
            isStored: true,
            data: Artistastored
        });
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const response = await ArtistasService.delete(id);
        return res.status(200).json({
            status: true,
            isDeleted: true,
            data: response,
        })
    },
    update: async (req, res) => {
        const { id } = req.params;
        const oldProduct = await ArtistasService.getOne(id);
        if (!oldProduct) {
            return res.status(404).json({
                status: 404,
                message: "El artista no fué encontrado"
            })
        }
        const updatedProduct = {
            ...oldProduct._doc, // product stored values, only the product data
            ...req.body,
        };
        const response = await ArtistasService.update(id, updatedProduct);
        return res.status(200).json({
            status: true,
            isUpdated: true,
            data: response,
        })
    }
}

export default ArtistasController;