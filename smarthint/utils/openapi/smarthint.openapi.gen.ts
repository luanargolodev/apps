
// deno-fmt-ignore-file
// deno-lint-ignore-file no-explicit-any ban-types ban-unused-ignore
//
// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// To generate this file: deno task start
//        


export interface OpenAPI {
/**
 * Caso seja necessária uma consulta de um produto específico, você poderá utilizar este endpoint para validar como que os dados deste produto específico, encontra-se na SmartHint.
 * 
 * Para realizar a consulta, utilize um dos campos chave do seu produto, para facilitar a sua consulta, conforme exemplo abaixo:
 */
"GET /api/Product": {
searchParams: {
/**
 * Campo obrigatório - Código identificador para realizar a atualização do Produto. Poderá ser utilizado os seguintes campos: ProductId, Mpn, Sku, SpecificationId e Link
 */
identifier?: string
}
}
/**
 * Para que a SmartHint aprenda o máximo dos seus produtos e seus Compradores, precisamos receber os produtos em nossa base, para isso, é necessário o envio dos produtos no formato abaixo.
 * 
 * Caso existam regras específicas de precificação, títulos de produtos, disponibilidade de estoque para regiões, campanhas ou sellers específicos, você poderá utilizar o **RULES**. Dentro deste objeto, é possível definir regras baseadas em ranges de valores inteiros, ranges de datas ou valores fixados através de texto para que os produtos sejam apresentados com preços diferentes, títulos diferentes ou até mesmo, estoque diversos de acordo com cada regras estipulada e cadastrada.
 * 
 * Além disso, é possível utilizar o **CONDITIONS** para que você consiga definir filtros específicos para cada produto, seguindo também, uma regra baseada em ranges de valores inteiros, ranges de datas e/ou valores fixos.
 * 
 * ## Body Params
 * 
 * | Atributo | Tipo | Descrição | Obrigatório |
 * | --- | --- | --- | --- |
 * | ProductId | String | Código do Produto na Loja | Sim |
 * | Title | String | Título utilizado no Produto | Sim |
 * | Mpn | String | MPN do Produto | Não |
 * | MpnFather | String | MPN Pai do Produto | Não |
 * | Sku | String | SKU Principal do Produto | Sim |
 * | Description | String | Descrição utilizada no Produto | Sim |
 * | Price | Double | Preço DE do Produto | Sim |
 * | SalePrice | Double | Preço POR do Produto | Sim |
 * | PromotionDiscount | Double | Valor de desconto do Produto sobre o Preço DE e Preço POR | Não |
 * | Availability | String | Disponibilidade do Produto, este que poderá variar entre **"in stock"** e **"out of stock"** | Sim |
 * | ProductType | String | Subcategorias dos Produtos | Sim |
 * | Link | String | URL do Produto na Loja | Sim |
 * | Installment | Integer | Parcelamento Mmáximo do Produto | Não |
 * | InstallmentAmount | Double | Valor da parcela do Produto | Não |
 * | BankSlipPrice | Double | Valor do Produto para pagamento por Boleto | Não |
 * | Gender | String | Gênero vinculado ao Produto | Não |
 * | Brand | String | Marca cadastrada para o produto | Sim |
 * | ReviewStars | Double | Avaliação dos produtos | Não |
 * | Categories | Array | Todas as categorias vinculadas ao Produto. Deve-se enviar os níveis de maneira segmentada | Sim |
 * | ImageLink | String | Imagem principal do Produto | Sim |
 * | AdicionalImageLink | Array | Demais imagens do Produto | Não |
 * | Tags | Array | Tags relacionadas ao Produto | Não |
 * | CreatedDate | DateTime | Data de criação do Produto. Utilizado para definir os lançamentos dos Produtos | Sim |
 * | OfferDate | DateTime | Data que este produto entrou em qualquer promoção na Loja. Utilizado para definir os produtos com Ofertas Especiais | Não |
 * | SellsCount | Integer | Número de vendas realizada do produto, para que seja feita a alimentação da base para determinar a relevância quando não temos os dados | Não |
 * | ViewsCount | Integer | Visualizações dos produtos, para que seja feita a alimentação da base para determinar a relevância quando não temos os dados | Não |
 * | ProductFilters | Object | Filtros que não são atributos das variações e necessitam que se tornem filtros. Neste objetivo, deverá ser enviado todos os atributos e seus respectivos valores | Não |
 * | AditionalFeatures | Object | Campos adicionais que podem ser utilizados na montagem do Frontend, para que seja facilitado o processo de Implantação, como o caminho para adição do produto no Carrinho, adição de produtos nos Favoritos | Não |
 * | Rules | Object | Regras criadas para a subsituição do(s) valores dos Produtos, de acordo com um paramêtro passado na busca | Não |
 * | Conditions | Object | Regra para que os campos de Filtros sejam adicionados conforme condição seja verdadeira. Utilizando esta função, todas as condições deverão ser retornadas verdadeiras, para que que o filtro seja criado na chamada da Busca | Não |
 * | Specifications | Object | Utilizado para o envio das Variações dos produtos, ao menos uma variação deverá ser cadatrada para o Produto | Sim |
 */
"POST /api/Product/": {
body: {

}
}
/**
 * Utilize a atualização Total de Produtos quando você tem a necessidade de alterar dados como Descrição, Variações do Produto (Specification) e etc.
 * 
 * Aconselhamos que para a atualização de preços e estoque, sejam utilizadas a chamadas específicas para tais, descrita logo abaixo.
 */
"PUT /api/Product/": {
body: {

}
}
/**
 * Caso algum produto da sua loja não exista mais e você queria retirar o mesmo da base da SmartHint, utilize este endpoint, passe o idenfiticador deste produto para realizar a deleção.
 */
"DELETE /api/Product/": {
searchParams: {
/**
 * Campo obrigatório - Código identificador para realizar a atualização do Produto. Poderá ser utilizado os seguintes campos: ProductId, Mpn, Sku, SpecificationId e Link
 */
identifier?: string
}
}
/**
 * Utilize o endpoint de Atualização de Preços para alterar o preço dos seus produtos dentro da SmartHint.
 * 
 * Basta inserir o identificador do mesmo e atualizar os respectivos preços e valores de parcelamento.
 */
"PUT /api/Product/Prices": {
body: {

}
}
/**
 * Utilize este endpoint para realizar a atualização da disponibilidade dos seus produtos na base SmartHint.
 */
"PUT /api/Product/Availability": {
body: {

}
}
/**
 * Sempre que um Comprador clicar em uma funcionalidade que utiliza a SmartHint, precisamos receber um request, conforme descrito abaixo:
 */
"GET /track/click": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
/**
 * Deve ser uma string que identifica o cliente, sempre que esse cliente utilizar o aplicativo, esse identificador deve possuir o mesmo valor. Recomendamos que seja um valor que não possua características pessoais do cliente, como por exemplo CPF, e-mail, nome, o ideal é que seja um ID interno ou algum hash gerado a partir de alguma dessas informações. Essa informação será enviada nas requisições para identificar a interação do cliente com a SmartHint e gerar dados sobre navegação e compras para os modelos de IA.
 */
anonymousConsumer?: string
/**
 * Valor da Session - Session (sessão) é o período de tempo em que o usuário interage com a aplicação, deverá ser enviado o identificador desta session
 */
session?: string
/**
 * URL ou Identificador da página do produto que foi clicado
 */
clickProduct?: string
/**
 * Código do produto clicado pelo Comprador. Importante que este dado seja o mesmo que foi enviado para o Catálogo de Produtos
 */
productId?: string
/**
 * URL ou Identificador da página que o Comprador está vindo, a Origem do mesmo até chegar na página do produto
 */
origin?: string
/**
 * O pagetype é o identificador do tipo de página que o Comprador se encontra, esta, que poderá variar entre:
 * - category
 * - search
 * - searchWithResult
 * - home
 * - cart
 * - emptycart
 * - checkout
 * - notfound
 * - product
 * - other
 */
pageType?: string
/**
 * Neste campo, deverá ser informado em qual funcionalidade da SmartHint o produto foi clicado, as opções poderão variar entre:
 * - search: quando um produto for clicado dentro de uma busca
 * - campo "nameRecommendation" das recomendações: quando um produto for clicado em uma vitrine de recomendação da SmartHint, deverá ser enviado o "nameRecommendation" da recomendação
 */
clickFeature?: string
/**
 * Quando um produto for clicado em uma busca, ou seja, quando o campo clickFeature for igual a search, deverá ser enviado o termo que foi digitado pelo Comprador para gerar a busca
 */
term?: string
/**
 * Campo utilizado para que a SmartHint saiba qual a posição dos produtos clicados nas funcionalidades, seja ela busca ou recomendação.
 * 
 * Quando o Comprador clicar em um produto, deverá ser informado o valor da posição na lista de produto, o sétimo produto da vitrine deverá ser o valor 7.
 */
position?: string
/**
 * Neste campo, deverá ser informado qual é a posição da Recomendação onde o produto foi clicado.
 * 
 * A posição, deverá ser a mesma informada no retorno da chamada de Recomendação por Página (recommendationByPage), onde os valores poderão variar entre 1 à 5. 
 */
locationRecs?: string
/**
 * Data que o clique foi realizado. A informação deverá ser enviada no seguinte formato "DD/MM/AAAA HH:MM:SS"
 */
date?: string
/**
 * Deverá ser informado o valor do Preço de Venda (SalesPrice) do Produto clicado, a informação deverá ser enviada sempre que houver o uso de uma funcionalidade da SmartHint.
 * 
 * A informação deverá ser enviada no seguinte formato: 1000.00 | 99.00 | 0.99
 */
productPrice?: string
/**
 * Deverá ser informado o tempo de entrega do frete calculado do Produto clicado em HORAS, a informação deverá ser enviada sempre que houver o uso de uma funcionalidade da SmartHint.
 * 
 * Caso existam mais valores relacionados ao Frete, deverá ser enviado o menor tempo em HORAS calculado.
 * 
 * A informação deverá ser enviada no seguinte formato: 48 | 240 | 4 | 360
 */
shippingTime?: string
/**
 * Deverá ser informado o valor do frete calculado do Produto clicado, a informação deverá ser enviada sempre que houver o uso de uma funcionalidade da SmartHint.
 * 
 * O valor enviado neste parâmetro deverá ser o Preço de Frete cobrado para o para o prazo enviado no campo "shippingTime".
 * 
 * A informação deverá ser enviada no seguinte formato: 0.00 | 99.00 | 0.99 | 
 */
shippingPrice?: string
}
}
/**
 * Cada vez que um Comprador visualiza uma “página” (conceito WEB, mas que deve ter o equivalente no APP) na sua loja, precisamos receber um request desse pageview para que a nossa Inteligência consiga captar e recomendar os melhores produtos para este Comprador.
 */
"GET /track/pageView": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
/**
 * Deve ser uma string que identifica o cliente, sempre que esse cliente utilizar o aplicativo, esse identificador deve possuir o mesmo valor. Recomendamos que seja um valor que não possua características pessoais do cliente, como por exemplo CPF, e-mail, nome, o ideal é que seja um ID interno ou algum hash gerado a partir de alguma dessas informações. Essa informação será enviada nas requisições para identificar a interação do cliente com a SmartHint e gerar dados sobre navegação e compras para os modelos de IA.
 */
anonymousConsumer?: string
/**
 * Valor da Session - Session (sessão) é o período de tempo em que o usuário interage com a aplicação, deverá ser enviado o identificador desta session
 */
session?: string
/**
 * URL ou Identificador da página que está sendo visualizada pelo Comprador
 */
url?: string
/**
 * URL ou Identificador da página que o Comprador está vindo, a Origem do mesmo até chegar na página/tela atual
 */
origin?: string
/**
 * O pagetype é o identificador do tipo de página que o Comprador se encontra, esta, que poderá variar entre:
 * - category
 * - search
 * - searchWithResult
 * - home
 * - cart
 * - emptycart
 * - checkout
 * - notfound
 * - product
 * - other
 */
pageType?: string
/**
 * Tempo que o Comprador ficou na página em segundos. Utilizaremos esta informação para alimentar nossa engine de inteligência artifical para indicar o quanto o Comprador se engajou com determinado produto, categoria, marca, etc.
 */
elapsedTime?: string
/**
 * Data que a visualização foi realizada. A informação deverá ser enviada no seguinte formato "DD/MM/AAAA HH:MM:SS"
 */
date?: string
/**
 * Deverá ser informado o valor do Preço de Venda (SalesPrice) do Produto visualizado, a informação deverá ser enviada sempre que houver o uso de uma funcionalidade da SmartHint.
 * 
 * A informação deverá ser enviada no seguinte formato: 1000.00 | 99.00 | 0.99
 */
productPrice?: string
/**
 * Deverá ser informado o tempo de entrega do frete calculado do Produto visualizado em HORAS, a informação deverá ser enviada sempre que houver o uso de uma funcionalidade da SmartHint.
 * 
 * Caso existam mais valores relacionados ao Frete, deverá ser enviado o menor tempo em HORAS calculado.
 * 
 * A informação deverá ser enviada no seguinte formato: 48 | 240 | 4 | 360
 */
shippingTime?: string
/**
 * Deverá ser informado o valor do frete calculado do Produto visualizado, a informação deverá ser enviada sempre que houver o uso de uma funcionalidade da SmartHint.
 * 
 * O valor enviado neste parâmetro deverá ser o Preço de Frete cobrado para o para o prazo enviado no campo "shippingTime".
 * 
 * A informação deverá ser enviada no seguinte formato: 0.00 | 99.00 | 0.99 | 
 */
shippingPrice?: string
}
}
/**
 * ### Dados dos Pedidos
 * 
 * Ao finalizar um pedido dentro da sua Loja ou dentro do seu Aplicativo, devem ser enviados os dados desse pedido, incluindo as informações de produtos (identificador, quantidade e valor) e do Comprado/Sessão (anonymousConsumer e session).
 * 
 * Assim como no identificador do Comprador, não devem ser enviados “dados sensíveis” como por exemplo, endereço do cliente, nome, CPF, dados bancários, etc.
 * 
 * ## Body Params
 * 
 * ## Atributo
 * 
 * | Tipo | Descrição | Obrigatório |
 * | --- | --- | --- |
 * | Date | DateTime | Data que o pedido foi finalizado/criado. A informação deverá ser enviada no seguinte formato "DD/MM/AAAA HH:MM:SS" |
 * | Freight | decimal | Valor cobrado para o frete do Pedido |
 * | OrderId | String | Código/Número do Pedido criado |
 * | Total | Decimal | Valor total do Pedido criado |
 * | anonymousConsumer | String | Identificador do Comprador que realizou a compra. É muito importante que este valor enviado seja o mesmo utilizado em toda a jornada do Comprador pelo Site/App |
 * | Session | String | Valor da Sessão do Comprador que realizou a compra. É muito importante que este valor enviado seja o mesmo utilizado em toda a jornada do Comprador pelo Site/App |
 * | Items | Object | Array de Produtos dentro do Pedido, importante que todos os produtos sejam encaminhados para que a nossa Engine de Inteligência Artifical consiga coletar esses dados para a geração de algumas vitrines |
 * | Name | String | Nome do Produto do Pedido |
 * | ProductId | String | ProductId do Produto do Pedido, este dado deve ser o mesmo enviado no catálogo |
 * | Quantity | Integer | Quantidade deste Produto adquirido no Pedido |
 * | SKU | String | Sku do Spectification adquirido no Pedido, este dado deve ser o mesmo enviado no catálogo |
 */
"POST /track/order": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
}
body: {

}
}
/**
 * Utilize a chamada de busca para retornar os produtos de acordo com o que o seu Comprador procura.
 * 
 * Caso você tenha cadastrado **RULES** ou **CONDITIONS** para os seus produtos, utilize da chamada para retornar estes valores segmentados, de acordo com o parâmetro atribuido.
 */
"GET /:cluster/Search/GetPrimarySearch": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
/**
 * Termo pesquisado pelo Comprador
 */
term?: string
/**
 * Valor a ser retornado a partir do SPOT (Produto)
 */
from?: number
/**
 * Quantidade de Produtos que deverá ser apresetnado por página
 */
size?: number
/**
 * Deve ser uma string que identifica o cliente, sempre que esse cliente utilizar o aplicativo, esse identificador deve possuir o mesmo valor. Recomendamos que seja um valor que não possua características pessoais do cliente, como por exemplo CPF, e-mail, nome, o ideal é que seja um ID interno ou algum hash gerado a partir de alguma dessas informações. Essa informação será enviada nas requisições para identificar a interação do cliente com a SmartHint e gerar dados sobre navegação e compras para os modelos de IA.
 */
anonymous?: string
/**
 * Por padrão, a SmartHint já devolve os produtos da busca pela relevância calculada pela nossa Inteligência Artificial, entretanto, caso o Comprador realize a troca da ordenação para mais vendidos, por exemplo, é necessário realizar a chamada da busca com a ordenação desejada, abaixo, segue os IDs de cada uma das ordenações possíveis:
 * - 0 - Relevância
 * - 1 - Menor Preço
 * - 2 - Maior Preço
 * - 3 - Alfabética A-Z
 * - 4 - Alfabética Z-A
 * - 5 - Mais Recentes
 * - 6 - Mais Vendidos
 * - 7 - Mais Vistos
 * - 8 - Maior Desconto
 */
searchSort?: number
/**
 * Caso existam Regras para a apresentação de produtos, este deverá ser enviado
 */
rule?: string
/**
 * Quando um "rule" foi passado na chamada de busca, deverá ser enviado também o parametro ruletype para a definição do tipo de rule, as opções são:
 * - valuedouble
 * - valuedate
 * - valuestring
 */
ruletype?: string
/**
 * Filtros sobre a busca realizada pelo Comprador
 */
filter?: (string | string[])
/**
 * Caso existam condições especiais para os Produtos, este deverá enviado
 */
condition?: string
}
response: {
SearchId?: string
SearchTerm?: string
Key?: string
Anonymous?: string
Date?: string
SearchTime?: number
PosProcessTime?: number
TotalResult?: number
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
Installment?: number
InstallmentAmount?: number
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
SecondImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
ProductFilters?: {
Key?: string
Show?: string
Visible?: boolean
Value?: {
Key?: string
Show?: string
}[]
Valeu?: {
Key?: string
Show?: string
}[]
}[]
AditionalFeatures?: {

}[]
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
}[]
Filters?: {
Key?: {
Show?: string
Value?: string
Active?: boolean
FieldSource?: string
IsAscending?: boolean
Sort?: number
MultiValue?: boolean
}
Value?: {
Quantity?: number
Index?: number
Show?: string
Value?: string
Checked?: string
Active?: boolean
IsAscending?: boolean
Sort?: number
MultiValue?: boolean
}[]
}[]
Sorts?: {
Value?: number
Field?: string
IsAscending?: boolean
Show?: string
Checked?: string
Active?: boolean
Sort?: number
MultiValue?: boolean
}[]
Suggest?: string[]
IsRedirect?: boolean
urlRedirect?: string
QuantityFilterShow?: number
QuantityFilterOptionShow?: number
Success?: boolean
Banners?: {
Name?: string
UrlBanner?: string
UrlRedirect?: string
BannerHtml?: string
Sequence?: number
}[]
}
}
/**
 * Com a chamada de Autocomplete, você poderá retornar os termos mais buscados dentro da sua Loja, ou utiliza-la para retornar termos complementares ao que o Comprador esta digitando.
 */
"GET /:cluster/Search/GetSuggestionTerms": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
/**
 * Termo de busca digitado pelo Comprador.
 * Quando o mesmo não for enviado, retornaremos os termos mais buscados da Loja
 */
term?: string
/**
 * Quantidade de termos que deverá ser retornado. Quando o mesmo não for enviado, iremos retornar a quanitdade cadastrar no painel administrativo
 */
sizeTerms?: number
/**
 * Quantidade de produtos que deverá ser retornado.
 * Quando o mesmo não for enviado, iremos apresentar a mesma quantidade informada em sizeTerms.
 * 
 */
sizeProducts?: number
/**
 * Deve ser uma string que identifica o cliente, sempre que esse cliente utilizar o aplicativo, esse identificador deve possuir o mesmo valor. Recomendamos que seja um valor que não possua características pessoais do cliente, como por exemplo CPF, e-mail, nome, o ideal é que seja um ID interno ou algum hash gerado a partir de alguma dessas informações. Essa informação será enviada nas requisições para identificar a interação do cliente com a SmartHint e gerar dados sobre navegação e compras para os modelos de IA.
 */
anonymous?: string
}
response: {
Active?: boolean
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
Installment?: number
InstallmentAmount?: number
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
SecondImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
AditionalFeatures?: {

}[]
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
}[]
Terms?: {
TermSuggestion?: string
UrlSearch?: string
Order?: number
}[]
Title?: string
}
}
/**
 * Vitrines por Página
 */
"GET /recommendationByPage": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shCode?: string
/**
 * Canal na qual as recomendações deverão ser retornadas. O valor do canal deverá ser o mesmo que está configurado no Painel Administrativo pelo Usuário-Lojista
 */
channel?: string
/**
 * Tipo de Página na qual as recomendações deverão ser retornadas. O valor da Página deverá ser o mesmo que está configurado no Painel Administrativo pelo Usuário-Lojista e poderá variar entre: 
 * - category
 * - search
 * - searchWithResult
 * - home
 * - cart
 * - emptycart
 * - checkout
 * - pagenotfound
 * - product
 * - others
 */
pagetype?: string
/**
 * Caso exista alguma configuração de Posicionamento de Vitrines específico para uma página, o valor desta página deverá ser atributo neste campo. O valor desta configuração deverá ser o mesmo cadastrado no Painel Administrativo pelo Usuário-Lojista, caso este campo não seja preenchido ou não tivermos um valor igual nas configurações, o mesmo será desconsiderado
 */
pageIdentifier?: string
/**
 * Deve ser uma string que identifica o cliente, sempre que esse cliente utilizar o aplicativo, esse identificador deve possuir o mesmo valor. Recomendamos que seja um valor que não possua características pessoais do cliente, como por exemplo CPF, e-mail, nome, o ideal é que seja um ID interno ou algum hash gerado a partir de alguma dessas informações. Essa informação será enviada nas requisições para identificar a interação do cliente com a SmartHint e gerar dados sobre navegação e compras para os modelos de IA.
 * 
 */
anonymous?: string
/**
 * Filtros sobre a recomendação, realizada através do productFilters enviados no Produto
 */
filter?: string
/**
 * Listagem das últimas categorias visitadas pelo cliente. O envio deverá ser realizado neste formato:
 * categories=category
 */
categories?: string
/**
 * Para a página do produto, deverá ser enviada uma lista com apenas um produto dentro da mesma e para as páginas de Carrinho/Checkout. deverá ser enviado todos os produtos que estão no carrinho, esta que deverá seguir o formato 
 * products=productid:valorProductId
 */
products?: string
/**
 * Posição das vitrines que deverá ser retornada quando a chamada for realizada
 */
position?: string
}
}
/**
 * Vitrines por Página com Produtos
 */
"GET /recommendationByPage/withProducts": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
/**
 * Canal na qual as recomendações deverão ser retornadas. O valor do canal deverá ser o mesmo que está configurado no Painel Administrativo pelo Usuário-Lojista
 */
channel?: string
/**
 * Tipo de Página na qual as recomendações deverão ser retornadas. O valor da Página deverá ser o mesmo que está configurado no Painel Administrativo pelo Usuário-Lojista e poderá variar entre: 
 * - category
 * - search
 * - searchWithResult
 * - home
 * - cart
 * - emptycart
 * - checkout
 * - pagenotfound
 * - product
 * - other
 */
pagetype?: string
/**
 * Caso exista alguma configuração de Posicionamento de Vitrines específico para uma página, o valor desta página deverá ser atributo neste campo. O valor desta configuração deverá ser o mesmo cadastrado no Painel Administrativo pelo Usuário-Lojista, caso este campo não seja preenchido ou não tivermos um valor igual nas configurações, o mesmo será desconsiderado
 */
pageIdentifier?: string
/**
 * Deve ser uma string que identifica o cliente, sempre que esse cliente utilizar o aplicativo, esse identificador deve possuir o mesmo valor. Recomendamos que seja um valor que não possua características pessoais do cliente, como por exemplo CPF, e-mail, nome, o ideal é que seja um ID interno ou algum hash gerado a partir de alguma dessas informações. Essa informação será enviada nas requisições para identificar a interação do cliente com a SmartHint e gerar dados sobre navegação e compras para os modelos de IA.
 * 
 */
anonymous?: string
/**
 * Filtros sobre a recomendação, realizada através do productFilters enviados no Produto
 */
filter?: (string | string[])
/**
 * Listagem das últimas categorias visitadas pelo cliente. O envio deverá ser realizado neste formato:
 * categories=category
 */
categories?: string
/**
 * Para a página do produto, deverá ser enviada uma lista com apenas um produto dentro da mesma e para as páginas de Carrinho/Checkout. deverá ser enviado todos os produtos que estão no carrinho, esta que deverá seguir o formato 
 * 
 * products=productid:valorProductId
 */
products?: string
/**
 * Posição das vitrines que deverá ser retornada quando a chamada for realizada
 */
position?: string
}
response: {
SmartHintPosition?: string
RecommendationsProducts?: {
Order?: number
NameRecommendation?: string
TitleRecommendation?: string
EventGoogleAnalytics?: string
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
Installment?: number
InstallmentAmount?: number
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
SecondImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
AditionalFeatures?: {

}
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
}[]
}[]
RecommendationsPromotional?: {
Order?: number
NameRecommendation?: string
TitleRecommendation?: string
EventGoogleAnalytics?: string
BannerUrl?: string
BannerUrlClick?: string
BannerHtml?: string
PositionBanner?: ("First" | "Last")
HasTimer?: string
StartDateTime?: string
EndDateTime?: string
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
Installment?: number
InstallmentAmount?: number
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
SecondImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
AditionalFeatures?: {

}
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
}[]
}[]
RecommendationsCombination?: {
Order?: number
NameRecommendation?: string
TitleRecommendation?: string
EventGoogleAnalytics?: string
combos?: {
Order?: number
titleCombo?: string
bannerUrl?: string
bannerUrlClick?: string
bannerHtml?: string
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
Installment?: number
InstallmentAmount?: number
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
SecondImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
AditionalFeatures?: {

}
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
}[]
}[]
}[]
Recommendations?: {
Order?: number
NameRecommendation?: string
TitleRecommendation?: string
EventGoogleAnalytics?: string
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
Installment?: number
InstallmentAmount?: number
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
SecondImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
AditionalFeatures?: {

}
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
}[]
}[]
}[]
}
/**
 * Hotsite
 */
"GET /:cluster/hotsite": {
searchParams: {
shcode?: string
url?: string
anonymous?: string
/**
 * Valor a ser retornado a partir do SPOT (Produto)
 */
from?: number
/**
 * Quantidade de Produtos que deverá ser apresetnado por página
 */
size?: number
/**
 * Por padrão, a SmartHint já devolve os produtos da busca pela relevância calculada pela nossa Inteligência Artificial, entretanto, caso o Comprador realize a troca da ordenação para mais vendidos, por exemplo, é necessário realizar a chamada da busca com a ordenação desejada, abaixo, segue os IDs de cada uma das ordenações possíveis:
 * - 0 - Relevância
 * - 1 - Menor Preço
 * - 2 - Maior Preço
 * - 3 - Alfabética A-Z
 * - 4 - Alfabética Z-A
 * - 5 - Mais Recentes
 * - 6 - Mais Vendidos
 * - 7 - Mais Vistos
 * - 8 - Maior Desconto
 */
searchSort?: number
/**
 * Filtros sobre a busca realizada pelo Comprador
 */
filter?: (string | string[])
}
response: {
Name?: string
Url?: string
Active?: boolean
SearchResult?: {
SearchId?: string
SearchTerm?: string
Key?: string
Anonymous?: string
Date?: string
SearchTime?: number
PosProcessTime?: number
TotalResult?: number
Products?: {
ProductId?: string
Title?: string
Mpn?: string
MpnFather?: string
Sku?: string
Description?: string
Price?: number
HasSalePrice?: boolean
SalePrice?: number
PromotionDiscount?: number
Availability?: string
ProductType?: string
Link?: string
HasInstallment?: boolean
Installment?: number
InstallmentAmount?: number
HasSecondInstallment?: boolean
SecondInstallment?: number
SecondInstallmentAmount?: number
HasBankSlipPrice?: boolean
BankSlipPrice?: number
Gender?: string
Brand?: string
ReviewStars?: number
Categories?: string[]
ImageLink?: string
AdicionalImageLink?: string[]
Tags?: string[]
CreatedDate?: string
OfferDate?: string
ProductFilters?: {
Key?: string
Show?: string
Visible?: boolean
Value?: {
Key?: string
Show?: string
}[]
Valeu?: {
Key?: string
Show?: string
}[]
}[]
AditionalFeatures?: {

}[]
Rules?: {
Value?: string
Values?: {
Name?: string
ValueDouble?: number
ValueString?: string
}[]
StartDouble?: number
EndDouble?: number
StartDate?: string
EndDate?: string
}[]
Conditions?: {
StartDouble?: number
EndDouble?: number
Validation?: string[]
Values?: {
Field?: string
Name?: string
ValueString?: string
}[]
Value?: string
}[]
Specifications?: {
sku?: string
specificationId?: string
availability?: string
changes?: {
Name?: string
ValueDouble?: number
ValueInt?: number
ValueString?: string
}[]
variations?: {
Name?: string
Value?: string
}[]
}[]
SellsCount?: number
ViewsCount?: number
StockDate?: string
isHighlightProduct?: boolean
AvailabilityPercentage?: number
}[]
Filters?: {
Key?: {
Show?: string
Value?: string
Active?: boolean
FieldSource?: string
IsAscending?: boolean
Sort?: number
MultiValue?: boolean
}
Value?: {
Quantity?: number
Index?: number
Show?: string
Value?: string
Checked?: string
Active?: boolean
IsAscending?: boolean
Sort?: number
MultiValue?: boolean
}[]
}[]
Sorts?: {
Value?: number
Field?: string
IsAscending?: boolean
Show?: string
Checked?: string
Active?: boolean
Sort?: number
MultiValue?: boolean
}[]
Suggest?: string[]
IsRedirect?: boolean
urlRedirect?: string
QuantityFilterShow?: number
QuantityFilterOptionShow?: number
Success?: boolean
Banners?: {
Name?: string
UrlBanner?: string
UrlRedirect?: string
BannerHtml?: string
Sequence?: number
}[]
}
}
}
/**
 * Banners por Página
 */
"GET /:cluster/banner/bannerByPage": {
searchParams: {
/**
 * SHCode - Código interno da SmartHint da Loja
 */
shcode?: string
/**
 * Canal na qual os banners deverão ser retornados. O valor do canal deverá ser o mesmo que está configurado no Painel Administrativo pelo Usuário-Lojista
 */
channel?: string
/**
 * Tipo de Página na qual os Banners deverão ser retornadas. O valor da Página deverá ser o mesmo que está configurado no Painel Administrativo pelo Usuário-Lojista e poderá variar entre: 
 * - category
 * - home
 * - cart
 * - emptycart
 * - checkout
 * - notfound
 * - product
 * - other
 */
pagetype?: string
/**
 * Caso exista alguma configuração de Posicionamento de Banners específico para uma página, o valor desta página deverá ser atributo neste campo. O valor desta configuração deverá ser o mesmo cadastrado no Painel Administrativo pelo Usuário-Lojista, caso este campo não seja preenchido ou não tivermos um valor igual nas configurações, o mesmo será desconsiderado
 */
pageIdentifier?: string
}
response: {
Name?: string
UrlBanner?: string
UrlRedirect?: string
NewTab?: string
Sequence?: number
BannerHtml?: string
}[]
}
}