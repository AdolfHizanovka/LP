from flask import Flask, render_template

app = Flask(__name__, 
            static_folder='static',  
            template_folder='templates')  

@app.route('/')
def home():
    return render_template('home.html')  

@app.route('/tentang')
def tentang():
    return render_template('tentang.html')  

@app.route('/tanya')
def tanya():
    return render_template('tanya.html') 

@app.route('/produk2')
def produk2():
    return render_template('produk2.html') 

@app.route('/produk')
def produk():
    return render_template('produk.html') 

@app.route('/pekan')
def pekan():
    return render_template('pekan.html') 

@app.route('/link')
def link():
    return render_template('link.html') 

@app.route('/jadwal')
def jadwal():
    return render_template('jadwal.html') 

@app.route('/festival')
def festival():
    return render_template('festival.html') 

if __name__ == '__main__':
    app.run(debug=True)
