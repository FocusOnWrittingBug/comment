/**
 * Created by hxsd on 2016/12/15.
 */
angular.module('pagefilter')
    .filter('pageFilter',function(){
        return function (products,pageNum,pageSize){
            if(!angular.isArray(products)||!angular.isNumber(pageNum)||!angular.isNumber(pageSize)){
                return products;
            }
            var startIndex=(pageNum-1)*pageSize;
            //if(product.length>=startIndex){
            //   return [];
            //}
            var newArr=products.slice(startIndex,pageSize*pageNum);
            return newArr;
        }
    })
    .filter('pagesFilter',function(){
    return function (products,pageSize,pageNum){

        var pages=Math.ceil(products.length/pageSize);
        if(pages<=5){
            var arr=[];
            for(var i=0;i<pages;i++){
                arr.push(i+1);
            }
            return arr;
        }else if(pages>5&&pageNum<4){
            var arr=[];
            for(var i=0;i<4;i++){
                arr.push(i+1);
            }
            arr.push('...',pages);
            return arr;
        }else if(pages>5&&pageNum==4){
            var arr=[];
            for(var i=0;i<5;i++){
                arr.push(i+1);
            }
            arr.push('...',pages);
            return arr;
        }else if(pages>5 && pageNum>4&&pages-pageNum>2){
            var arr=[];
            arr.push(1,'...',pageNum-1,pageNum,pageNum+1,'...',pages);
            return arr;
        }else if(pages>5&&pages-pageNum==2){
            var arr=[];
            arr.push(1,'...',pageNum-1,pageNum,pageNum+1,pages);
            return arr;
        }else if(pages>5&&pages-pageNum==1){
            var arr=[];
            arr.push(1,'...',pageNum-1,pageNum,pages);
            return arr;
        }
        /*else if(pages>5 &&pages-pageNum>2){
            var arr=[];
            arr.push(1,'...',pageNum-1,pageNum,pageNum+1,'...',pages);
            return arr;
        }*/
        else if(pages>5&&pages==pageNum){
            var arr=[];
            arr.push(1,'...',pageNum-1,pages);
            return arr;
        }



    }
})
