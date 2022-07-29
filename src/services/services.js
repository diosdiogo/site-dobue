import api from "./api";

export const MenuServices = async () => {
    var menu = {};
    try{
        const resp = await api.get("/menu.php");
        menu = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return menu;
}

export const ContatoServices = async () => {
    var contato = {};
    try{
        const resp = await api.get("/contato.php");
        contato = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return contato;
}

export const SocialServices = async () => {
    var social = [];
    try{
        const resp = await api.get("/social.php");
        social = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return social;
}

export const ModuloServices = async () => {
    var modulo = {};
    try{
        const resp = await api.get("/modulo.php");
        modulo = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return modulo;
}

export const SlideServices = async () => {
    var imageCarousel = [];

    try{
        const resp = await api.get("/slide.php");
        imageCarousel = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return imageCarousel;
}

export const HomeServices = async () => {
    var pagina = {};
    
    try{
        const resp = await api.get("/home.php");
        pagina = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return pagina;

}

export const InstitucionalServices = async () => {
    var instituição = {};
    
    try{
        const resp = await api.get("/institucional.php");
        instituição = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return instituição;
}

export const ClienteServices = async () => {
    var cliente = [];
    
    try{
        const resp = await api.get("/clientes.php");
        cliente = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return cliente;
}

export const PageClienteServices = async () => {
    var Pagecliente = {};
    
    try{
        const resp = await api.get("/pageCliente.php");
        Pagecliente = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return Pagecliente;
}

export const PageRepServices = async () => {
    var pageRep = {};
    
    try{
        const resp = await api.get("/pageRep.php");
        pageRep = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return pageRep;
}

export const RepresentantesServices = async () => {
    var representantes = [];
    
    try{
        const resp = await api.get("/representantes.php");
        representantes = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return representantes;
}

export const PageContatoServices = async () => {
    var pageContato = {};
    
    try{
        const resp = await api.get("/pageContato.php");
        pageContato = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return pageContato;
}

export const PageDownloadServices = async () => {
    var pageDownload = {};
    
    try{
        const resp = await api.get("/pageDownload.php");
        pageDownload = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return pageDownload;
}

export const DownloadServices = async () => {
    var download = [];
    
    try{
        const resp = await api.get("/download.php");
        download = resp.data;

    }catch(erro){
        console.log(erro)
    }

    return download;
}

export const GrupoServices = async () => {
    var grupo = [];
    
    try{
        const resp = await api.get("/grupo.php");
        grupo = resp.data;
        grupo.sort((a, b) => {
            if(a.descricao > b.descricao)
                return 1
            if(a.descricao < b.descricao)
                return -1
            return 0
        })

    }catch(erro){
        console.log(erro)
    }

    return grupo;
}

export const PageProdutoServices = async () => {
    var pageProduto = {};
    
    try{
        const resp = await api.get("/pageProduto.php");
        pageProduto = resp.data;
    }catch(erro){
        console.log(erro)
    }

    return pageProduto;
}

export const ProdutoByGrupoServices = async (e) => {
    var retorno = [];
    var produto = [];
    var cores   = []

    var headers = { 
        "Content-Type": "application/json"
    }

    try{
        const resp = await api.get('/produto_by_grupo.php?grupo='+e+'','', headers);
        retorno = resp.data;

        retorno.forEach((value, index) => {
            cores = [];
            value['0'].grupoCores.forEach((grupoCor, keyGrupoCor) =>{
                grupoCor['0'].forEach((cor, keyCor) =>{
                    cores.push({
                        id: cor.id,
                        descricao: cor.descricao,
                        cor: cor.codigo,
                        grupo: grupoCor.grupoNome
                    })
                })
            })
            produto.push({
                id: value.produto_id,
                produto: value.produto_titulo,
                descricao: value.produto_descricao,
                dimensoes: value.produto_tamanho,
                materiais: value.produto_material,
                embalagem: value.produto_embalagem,
                img: value.produto_imagem,
                cores: cores
            })
        })
    }catch(erro){
        console.log(erro)
    }

    return produto;
}
