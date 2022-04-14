import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import {Button, Card, Col, InputNumber, Row, Table} from "antd";
import './App.css';
import {AddItemRequest, DefaultApi, DeleteItemRequest, Item, ItemFiled, Product, ProductsApi} from "./openapi";
import Meta from "antd/es/card/Meta";
import {CloseCircleFilled, DeleteFilled, ShoppingCartOutlined, ShoppingOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Column from "antd/es/table/Column";

const DEV = true
function App() {
    const productsApi = new ProductsApi();
    const cartAPI = new DefaultApi();
    const [products, setProducts] = useState<Array<Product>>([]);
    const [items, setItems] = useState<Array<Item>>([]);


    // @quantity: 未定义默认在当前+1，否则更新为当前quantity
    const updateItemQuantity = (productId: string, quantity?: number) => {
        if (quantity === undefined) {
            const itemToUpdate = items.filter(item => item.product.id === productId)
            if (itemToUpdate.length !== 0 ) {
                quantity = itemToUpdate[0].quantity + 1;
            } else {
                quantity = 1;
            }
        }

        const itemFiled: ItemFiled = {quantity};
        const requestArgs: AddItemRequest = {productId, itemFiled}
        cartAPI.addItem(requestArgs).then(() => {
            //todo
        })
    }

    const deleteItem  = (productId: string) => {
        const requestArgs: DeleteItemRequest = {productId};
        cartAPI.deleteItem(requestArgs).then(resp => {
            if (resp.success) {
                setItems(items.filter(item => item.product.id !== productId))
            }
        })
    }
    useEffect(() => {
        if (DEV) {

            setProducts([{"id":"13284888","name":"Java从入门到精通（第6版）（软件开发视频大讲堂） Java入门经典","price":75.8,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/186038/9/7947/120952/60bdd993E41eea7e2/48ab930455d7381b.jpg"},{"id":"12800420","name":"Java核心技术 第11版 套装共2册 CoreJava从入门到精通套装","price":149.0,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/146172/4/7453/357315/5f5099a8E331a2969/e8c60e5068541c7d.jpg"},{"id":"","name":"零基础学Java（全彩版）手把手教学","price":56.7,"image":"https://img11.360buyimg.com/n1/s200x200_jfs/t1/70233/19/16850/243662/6142a043E0e5f28d9/d7ee7d164b8eb156.jpg"},{"id":"10058164","name":"Java编程思想（第4版） Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉 100册以上团购优惠联系电话4006186622","price":54.0,"image":"https://img14.360buyimg.com/n1/s200x200_jfs/t2191/111/699154754/198998/32d7bfe0/5624b582Nbc01af5b.jpg"},{"id":"12602672","name":"Java从入门到项目实战（全程视频版） 编程入门/IT计算机书籍 65小时全程视频教学","price":99.7,"image":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/37162/11/8870/130954/5ccfe770E9ce31151/74a5a5dcd83ecc09.jpg"},{"id":"12759308","name":"Java核心技术 卷I 基础知识（原书第11版） CoreJava第11版","price":74.5,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/102900/26/2632/158701/5dd601a5E9ed34588/596e136d4a144cae.jpg"},{"id":"","name":"开课吧 Java编程大厂通用Java技术解决方案 体验课【查看客服消息获取上课链接】","price":3.0,"image":"https://img11.360buyimg.com/n1/s200x200_jfs/t1/214113/6/2363/247803/617bc3c7Ea43275a4/754c0b120acdcc44.png"},{"id":"12507084","name":"Effective Java中文版（原书第3版） Java之父力荐；Jolt大奖获奖作品升级；与Java核心技术、Java编程思想、深入理解Java虚拟机堪称Java四大名著。正版图书双色印刷","price":78.5,"image":"https://img14.360buyimg.com/n1/s200x200_jfs/t1/28526/24/4598/165510/5c3433c7Ea1da5694/eb0bb43a326e8709.jpg"},{"id":"10167771016","name":"Java从入门到精通 第6版 软件开发视频大讲堂 java语言程序设计电脑编程序员计算机教程书 清华 Java入门经典","price":39.8,"image":"https://img14.360buyimg.com/n1/s200x200_jfs/t1/170529/40/26039/450030/619a0dacE7efe063c/b88517a36b00a645.jpg"},{"id":"13494800","name":"IntelliJ IDEA 软件开发与应用（计算机技术开发与应用丛书） 专业、系统、全面地介绍IntelliJIDEA开发工具！配套丰富示例并涵盖项目开发中的技术体系结构","price":132.1,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/217328/28/2163/91571/617a4053E4dda99a9/318df0de59e0d681.jpg"},{"id":"12607299","name":"深入理解Java虚拟机：JVM高级特性与最佳实践（第3版） 周志明JVM新作","price":85.1,"image":"https://img14.360buyimg.com/n1/s200x200_jfs/t1/88306/3/4620/259118/5de865cdE6678a233/6193b6435bb973d1.jpg"},{"id":"10100190","name":"O'Reilly：Head First Java（中文版 第2版 涵盖Java5.0） 800万人共同学习的高效操作法","price":79.0,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t2680/274/3707696254/120035/6281369a/57986bbdN27e0e4fe.jpg"},{"id":"","name":"现货包邮 深入理解Java虚拟机：JVM高级特性与最佳实践（第3版）新版 周志明|8065616","price":83.0,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/208745/23/9437/166331/61931329E03ce6ac4/e1642356b8b8a746.jpg"},{"id":"13216522","name":"Java语言程序设计 基础篇 原书第12版 Java经典教材再推新版","price":98.7,"image":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/158063/34/21117/158566/6080deecEe8a120f5/133314834a5093d1.jpg"},{"id":"12518025","name":"疯狂Java讲义（第5版）（含DVD光盘一张）(博文视点出品) 800万人共同学习的高效操作法","price":137.6,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/41570/5/1180/179278/5cc54479E7522cee3/d5b50e571ccc926e.jpg"},{"id":"10020017718280","name":"佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 黑色DECA版 22速 50#身高173-180cm 700C 佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 黑色DECA版 22速 50#身高173-180cm 700C","price":3500.0,"image":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/185387/9/21908/181399/62451cddE5750aac2/6c9a5e8ea9b1b496.jpg"},{"id":"12767450","name":"Java实战 第2版(图灵出品) 《Java","price":82.1,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/58652/2/12362/129522/5de751dcE494b5dfa/d00e13726d206e88.jpg"},{"id":"12958580","name":"JavaScript高级程序设计 第4版(图灵出品） web前端开发教程","price":89.0,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg"},{"id":"","name":"赠教程书籍Java修炼指南高频源码解析开课吧组编JAVA\\/JDK源码\\/JAVA\\/SE\\/API","price":69.0,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/124888/4/20085/124453/60af780fE3daceb4b/2425ebadd81ea9d7.jpg"},{"id":"12656478","name":"Java Web从入门到精通（第3版）（软件开发视频大讲堂） 200册以上团购电话：01089111488","price":75.8,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/63193/26/4716/123499/5d2c330cEaa9d4e6e/c10ef361096c96a0.jpg"},{"id":"12759911","name":"【包邮】labuladong的算法小抄(Python Java C++零基础)(博文视点出品) 800万人共同学习的高效操作法","price":100.0,"image":"https://img11.360buyimg.com/n1/s200x200_jfs/t1/222655/9/15017/109672/624d2048E989c419f/0f7db0234fd95dcc.jpg"},{"id":"11740734","name":"Java并发编程的艺术 阿里巴巴技术专家/Java并发编程领域领军人物撰写","price":38.9,"image":"https://img14.360buyimg.com/n1/s200x200_jfs/t1312/364/1104231705/156699/523dc84c/55b87a5eN09430825.jpg"},{"id":"12791368","name":"Java核心技术 卷II 高级特性（原书第11版） CoreJava第11版","price":74.5,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/92329/23/8897/158518/5e09abdcE2cd17eb5/056bbe9e4803be8d.jpg"},{"id":"12577417","name":"Java 11官方入门教程（第8版） Java编程入门官方学习资料","price":94.8,"image":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/68117/11/11367/197460/5d8b4901Ec51f134b/6c391f77d952f98d.jpg"},{"id":"","name":"从零开始学Java(第3版从零开始学编程)","price":30.5,"image":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/132287/38/5574/249154/5f20fd07E66fa0a22/bc110d9b771efae0.jpg"},{"id":"10020951649181","name":"佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 3代黑色DECA版 22速 50#身高172-181cm 700C 佳沃JAVA公路自行车双碟刹公路车18变速弯把男女款成人单车赛车鱼雷3 3代黑色DECA版 22速 50#身高172-181cm 700C","price":3500.0,"image":"https://img11.360buyimg.com/n1/s200x200_jfs/t1/185387/9/21908/181399/62451cddE5750aac2/6c9a5e8ea9b1b496.jpg"},{"id":"12275164","name":"零基础学JavaScript（全彩版）自学JavaScript 赠视频 电子书 源码 技术团队答疑 零基础自学Web前端开发的入门图书","price":73.6,"image":"https://img14.360buyimg.com/n1/s200x200_jfs/t1/139538/19/27055/124971/618b1fbbE8f98bfcc/21c80814703c63e7.jpg"},{"id":"12445838","name":"码出高效：Java开发手册(博文视点出品) 800万人共同学习的高效操作法","price":98.0,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t30436/35/1494683199/69182/11fe5fb2/5ce20930N6d70a9f6.jpg"},{"id":"12827212","name":"Java 11官方参考手册（第11版） Java语言专家、畅销书作者HerbertSchildt新书","price":188.1,"image":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/103759/9/19668/133910/5ea007f7E82d73d22/c7c36a4e35d9e3b4.jpg"},{"id":"12991976","name":"阿里巴巴Java开发手册（第2版）(博文视点出品) 800万人共同学习的高效操作法","price":31.0,"image":"https://img11.360buyimg.com/n1/s200x200_jfs/t1/111618/38/19052/229489/5f74b1baE3a77dfa1/d85a8401e18b5ea5.jpg"}])
            setItems([{product: {"id":"13284888","name":"Java从入门到精通（第6版）（软件开发视频大讲堂） Java入门经典asdddddddddddddddddd","price":75.8,"image":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/186038/9/7947/120952/60bdd993E41eea7e2/48ab930455d7381b.jpg"},
                quantity :10}]);
        } else {
            productsApi.listProducts().then((result) => {
                setProducts(result);
            });
            cartAPI.showCartItems().then(result => {
                setItems(result);
            })
        }
    }, [])

    const cartFooter = (currentItems: Array<Item>) => (<div>
        <Row>
            <Col span={4}>
                <Paragraph strong={true} style={{fontSize: "medium"}} >total</Paragraph>
            </Col>
            <Col span={4} style={{fontSize: "medium"}} >
                {items.reduce((pre, current) => (pre + current.product.price * current.quantity), 0)} ￥
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Button style={{width: "80%", fontSize: "large"}} icon={<CloseCircleFilled style={{color: "red"}}/>} shape={"round"} size={"large"}>    Cancel    </Button>
            </Col>
            <Col span={12}>
                <Button style={{width: "80%", fontSize: "large"}} icon={<ShoppingOutlined />} type={"primary"} shape={"round"} size={"large"}>    Charge    </Button>
            </Col>
        </Row>
    </div>)

  return (
    <div className="App">
      <body>
        <Row gutter={20}>
            <Col span={14}>
                <Card className={"product-cards"}>
                <Row gutter={[40, 16]}>
                    {products.map((product) => (
                            <Col span={6}>
                                <Card className={"product"}
                                      hoverable={true}
                                      cover={<img alt={product.name} src={product.image} className={"product-image"}/>}
                                      actions={[
                                          <Row gutter={20}>
                                              <Col span={12}>
                                                  <Title level={3}> {product.price} ￥</Title>
                                              </Col>
                                              <Col span={12}>
                                                  <Button icon={<ShoppingCartOutlined key={"add-item"}/>}
                                                                                  type={"primary"}
                                                                                  onClick={() => {updateItemQuantity(product.id)}}
                                                  >Add</Button>
                                              </Col>

                                          </Row>

                                          ,
                                      ]}
                                >
                                    <Meta
                                        // className={"product-name"}
                                        title={<Paragraph  className={"product-name"} ellipsis={{tooltip: product.name}}>{product.name}</Paragraph>
                                            }
                                    />
                                </Card>
                            </Col>

                        )
                    )}
                </Row>
                </Card>
            </Col>

            <Col span={10}>
                <Card className={"cart"}>
                   <Table<Product & {quantity: number}> dataSource={items.map(item => (
                        Object.assign(item.product, {quantity: item.quantity}))
                   )}
                        scroll={{x : "100%"}}
                        footer={() => cartFooter(items)}
                   >
                       <Column title={"product"}
                               dataIndex={"image"}
                               render={imageUrl => (
                                   <img  width={"100%"} src={imageUrl} alt={"image"}/>
                               )}
                       />
                        <Column title={"product name"}
                                dataIndex={"name"}
                                // ellipsis={true}
                                width={"10%"}

                        />
                       <Column title={"price"}
                               dataIndex={"price"}
                       />
                        <Column<Product & {quantity: number}> title={"quantity"}
                                dataIndex={"quantity"}
                                width={"10%"}
                                render={(quantity: number, record) => (
                                    <InputNumber value={quantity}
                                                 onChange={(value) => {
                                                     updateItemQuantity(record.id, value);
                                                 }}
                                                 min={1}
                                                 max={9999}
                                    />
                                )}
                        />
                       <Column title={"action"}
                               dataIndex={"id"}
                               width={"10%"}
                               render={(id: string) => (
                                   <Button danger icon={<DeleteFilled color={"red"}/>} >
                                       remove
                                   </Button>
                               )}/>
                   </Table>
                </Card>
            </Col>
        </Row>
      </body>
    </div>
  );
}

export default App;
