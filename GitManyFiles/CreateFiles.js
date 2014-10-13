var iFolder = 2;
var nFiles = 500;

var currentFolder = ds.getModelFolder().path;

var folder = Folder(currentFolder+ "testFolder"+iFolder);
folder.create();

for (var i = 0; i < nFiles; i++) {
	if(i%2 == 0)
	{
		var f = File(folder.path+ "file "+i+".js");
		f.create();
	}
	else if(i%3 == 0) 
	{
		var f = File(folder.path+ "file "+i+".css");
		f.create();
	}
};

var folder = Folder(currentFolder+ "testFolder"+(iFolder+1));
folder.create();

for (var i = 0; i < nFiles; i++) {
	if(i%2 == 0)
	{
		var f = File(folder.path+ "file "+i+".js");
		f.create();
	}
	else if(i%3 == 0) 
	{
		var f = File(folder.path+ "file "+i+".css");
		f.create();
	}
};


var outFolderFile = File(currentFolder+ "file"+iFolder+".js");
outFolderFile.create();
