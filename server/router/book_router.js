import { Books } from './../controller/book';

const books = new Books();

class Main{
	constructor(app){

		app.get("/cata/list",this.CataList);
		
		app.get("/cata/content",this.CataContent);
	}
	
	CataList(req,res){
		function callback(error, data){
			res.send(data);
		}
		books.getCatalog(callback);
	//  箭头函数
	//	books.getCatalog((error,data)=>{
	//		res.send(data);
	//	});
	}
	CataContent(req,res){
		let {id,pn=0,rn=30} = req.query;
		books.getBookContent({
			'catalog_id' : id,
			'pn' : pn,
			'rn' : rn
		},(error,data)=>{
			res.send(data);
		})
	}
}

export { Main };