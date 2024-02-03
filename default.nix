{
  pkgs ? import <nixpkgs> {},
  run ? "zsh"
}:
(pkgs.buildFHSEnv {
  name = "nvm-env";
  targetPkgs = pkgs: (with pkgs; [
    udev
    glibc
    gcc
    zsh
    vim
    git
  ]);
  multiPkgs = pkgs: (with pkgs; [
  ]);
  runScript = "${run}";
  profile =
    '' 
      export NVM_DIR="$HOME/.nvm"
      unset LD_LIBRARY_PATH
      if [ ! -d "$NVM_DIR" ]; then
        git clone https://github.com/nvm-sh/nvm.git ~/.nvm
      fi
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    '';
}).env

