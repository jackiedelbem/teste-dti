# Exemplo: ./create.sh  Template
echo "Criando Página $1"
LOWER=`echo $1 | perl -pe 's/([a-z0-9])([A-Z])/$1-\L$2/g' | tr '[:upper:]' '[:lower:]'`
echo $LOWER
mkdir $LOWER
cp ./_template/* ./$LOWER
mv ./$LOWER/template-page.scss ./$LOWER/$LOWER-page.scss
sed -i -e "s/template/${LOWER}/g" ./$LOWER/$LOWER-page.scss
sed -i -e "s/template/${LOWER}/g" ./$LOWER/index.js
sed -i -e "s/Template/${1}/g" ./$LOWER/index.js
rm ./$LOWER/$LOWER-page.scss-e
rm ./$LOWER/index.js-e
echo "Feito!"

