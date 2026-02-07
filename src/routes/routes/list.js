import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let routes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    const {region, season } = req.query;

     if (region && region !== 'all') {
        routes = routes.filter(route => route.region === region);
    }

    if (season && season !== 'all') {
        routes = routes.filter(route => route.bestSeason === season);
    }


    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        query: req.query
    });
};