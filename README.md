## 実装済みサイト
#### https://mywebsitesugura.herokuapp.com/

これまで作成してきたものの一部をまとめたサイトです．

このサイトはDjangoを用いて作成しており，Herokuで実装しています．（Herokuだと初回起動に30秒ほどかかるためAWSへの移行を計画中）
ログインすることで基本的な処理であるCRUD処理を行うことができます．ただしゲストアカウントを用意するために更新と削除はスーパーユーザーのみの機能としました．

**コンテンツは主に4つあり3.4は外部リンクになります．**

1.  p2v                      単語の分散表現（word2vec）を用いたシステム．事前に学習させたモデルを読み込み単語の足し算を行う．
2.  mnist demo               Tensorflow.jsを用いた簡単な手書き数字認識を行うシステム
3.  サポートまるわかり       沖縄市に住む保護者向けに子育て支援制度・子供の居場所を提供するシステム．外部リンク．Vue.jsでの実装．
4.  りゅうvote               沖縄県議選の候補者たちと同じ質問に回答することでユーザーと候補者との考えがどの程度似ているかをユーザーに示すシステム．


## 動作までの手順
```
pip install requirements.txt
python manage.py runserver
```

※SECRET_KEYは自前で用意する必要があります．
